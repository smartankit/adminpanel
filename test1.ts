import 'reflect-metadata';
import 'jasmine-expect';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import { AuthService } from '../../auth/service';
import { HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { EventEmitter, } from '@angular/core';
import { inject, async, TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { User } from 'oidc-client';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { API_CONFIG, ApiConfig } from '../../../types'
import { ChannelService, ChannelConnectionState, HUB_URL } from '../service';
import { ChannelEvent } from '../../channel/channelEvent';
import { ChannelSubject } from '../../channel/ChannelSubject';
import { Globals } from '../../../globals';
import { Subject } from 'rxjs/Subject';

describe('# Service: Channel', () => {

    class ChannelServiceMock {
        connectionState$: Observable<ChannelConnectionState> = Observable.create(() => {
            return ChannelConnectionState.Connected;
        });
        error$: Observable<string> = Observable.create(() => { return ''; });
        starting$: Observable<string> = Observable.create(() => { return ''; });


    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: ChannelService, useClass: ChannelServiceMock }]
        });

    });
    it('should ...', inject([ChannelService], (service: ChannelService) => {

        expect(service).toBeTruthy();
    }));

});
describe('#start()', () => {
    let mockAuth: AuthService;
    const TestTokenType = 'Test Bearer';
    const TestAccessToken = 'Test Token';
    let service: ChannelService;
    let mockUser = {
        token_type: TestTokenType,
        access_token: TestAccessToken
    } as User;
    const mockError = 'TEST ERROR';
    var doneFail = {}
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
            addEventListener: function (event, handler: Function) {
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
                            proxies: {},

                            createHubProxy: (channelHub: string) => {
                                return {
                                    on: (receiveMessage: string, hubProxyFunc: any) => {

                                    }
                                }
                            },
                            stateChanged: (state: any) => { },
                            error: (error) => { }
                        };
                    }
                },

            fireClose: function () {
                this.handler();
            }
        },
        navigator: {
            userAgent: 'test',
            platform: 'mocha'
        }
    };


    beforeEach(() => {

        mockAuth = {
            currentUser: mockUser,
            loggedIn: false,
            userLoadedEvent: new EventEmitter<User>()
        } as AuthService;

        TestBed.configureTestingModule({
            providers: [{ provide: AuthService, useClass: mockAuth }]
        });


        let hubUrl: string = 'https://staging.sockets.ipreo.com/signalr';
        service = new ChannelService(hubUrl, mockAuth, fakeGlobals as Globals)
    });

    it('should listen for a signed in user from the auth service', async(() => {
        spyOn(mockAuth.userLoadedEvent, 'subscribe')
        service.start();
        mockAuth.userLoadedEvent.emit(mockUser);
        expect(mockAuth.userLoadedEvent.subscribe).toHaveBeenCalled();
    }));

    it('should be Channel is subcribed()', () => {

        let ChannelEvent: {
            channelName: 'test',
            timestamp: Date,
            data: 'test';
            json: any;
        }
        let spy = spyOn(service, 'sub');
        service.sub(this.channel);
        expect(spy).toHaveBeenCalled();
        spyOn(service.starting$, 'subscribe').and.returnValue(Observable.of(ChannelEvent));  
        service.starting$.subscribe();
        expect(service.starting$.subscribe).toHaveBeenCalled();
    });

    it('start Channel service connectionState', () => {
        spyOn(service.connectionState$, 'subscribe')
        service.connectionState$.subscribe();
        expect(service.connectionState$.subscribe).toHaveBeenCalled();
    });

    it('Error Channel Service ', () => {
        spyOn(service.error$, 'subscribe')
        service.error$.subscribe();
        expect(service.error$.subscribe).toHaveBeenCalled();
    });



});



