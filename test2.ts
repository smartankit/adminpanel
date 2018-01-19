import 'reflect-metadata';
import 'jasmine-expect';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import { AuthService } from '../../auth/service';
import { HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { EventEmitter, } from '@angular/core';
import { inject, async, TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { User, UserManager } from 'oidc-client';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { API_CONFIG, ApiConfig } from '../../../types';
import { ChannelService, ChannelConnectionState, HUB_URL } from '../service';
import { ChannelEvent } from '../../channel/channelEvent';
import { Globals } from '../../../globals';
import { Subject } from 'rxjs/Subject';

describe('ChannelService', () => {
    let mockAuth: AuthService;
    const TestTokenType = 'Test Bearer';
    const TestAccessToken = 'Test Token';
    let service: ChannelService;
    const hubUrl: string = 'https://staging.sockets.ipreo.com/signalr';
    let mockUser = {
        token_type: TestTokenType,
        access_token: TestAccessToken
    } as User;
    const mockError = 'TEST ERROR';
    let mockChannel = 'test';
    let doneFail = {};
    doneFail = {
        done: () => {
            return doneFail;

        },
        fail: (error) => {
            return doneFail;
        }
    };

    const fakeGlobals = {
        window: {
            handler: Function,
            addEventListener: (event, handler: Function) => {
                this.handler = handler;
            },
            '$':
                {
                    hubConnection: () => {
                        return {
                            start: () => {
                                return doneFail;
                            },
                            qs: null,
                            logging: false,
                            url: 'https://staging.sockets.ipreo.com/signalr',
                            proxies: {
                                invoke: {}
                            },
                            createHubProxy: (channelHub: string) => {
                                return {
                                    on: (receiveMessage: string, hubProxyFunc: any) => { }
                                };
                            },
                            stateChanged: (state: any) => { },
                            error: (error) => { }
                        };
                    }
                },

            fireClose: () => {
                this.handler();
            }
        },
        navigator: {
            userAgent: 'test',
            platform: 'mocha'
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: Globals, useValue: fakeGlobals },
                { provide: HUB_URL, useValue: hubUrl },
                AuthService,
                UserManager,
                ChannelService
            ]
        });

        service = TestBed.get(ChannelService);
        mockAuth = TestBed.get(AuthService);
        mockAuth.currentUser = mockUser;
    });

    it('Should listen for a signed in user from the auth service', () => {
        spyOn(mockAuth.userLoadedEvent, 'subscribe');
        service.start();
        expect(mockAuth.userLoadedEvent.subscribe).toHaveBeenCalled();
    });

    it('Should listen for a new user from the auth service', () => {
        spyOn(mockAuth.userLoadedEvent, 'subscribe');
        service.start();
        expect(mockAuth.userLoadedEvent.subscribe).toHaveBeenCalled();
    });
    it('Should create Channel subject', () => {
        spyOn(service.starting$, 'subscribe');
		
        //Creates channel subject for the first time and add it to subjects collection
        service.sub(mockChannel);
        expect(service.starting$.subscribe).toHaveBeenCalled();
    });

    it('Should not subscribe to starting$ when channelSubject is being created for the second time', () => {
		
        //Creates channel subject for the first time and add it to subjects collection
        let channelSub = service.sub(mockChannel);
       
        //spy on service.starting$ after first execution to make sure it does not hit subscribe next time
        spyOn(service.starting$, 'subscribe');
		
        //Call it again to make sure it's not creating a new subject with same channel 'test' and getting the same from subjects collection
        let channelSub2 = service.sub(mockChannel);
        expect(channelSub).toEqual(channelSub2);
        expect(service.starting$.subscribe).not.toHaveBeenCalled();
    });
});
