import React from 'react';
import axios from 'axios';

function print() {
    console.log.apply(console, arguments);
    var el = document.createElement('pre');
    el.innerHTML = Array.apply(null, arguments).map(function (value) {
        return JSON.stringify(value, null, '\t');
    }).join(', ');
    el.style.borderBottom = '1px solid #eee';
    document.querySelector('.output').appendChild(el);
}

export default class AxiosInterceptors extends React.Component{

    getRefreshToken = () => {
        print('TRYING TO GET TOKEN...');
        return axios({
            url: 'https://run.plnkr.co/preview/cjwg14w9n00083b6d3beuvhc1/gettoken'
        });
    }
    

    componentDidMount() {

        axios({
            url: 'notexists'
        })
        .then(function (response) {
            print('RESPONSE', response)
        })
        .catch(function (error) {
            print('error', error);
        })

        axios.interceptors.response.use(undefined, function (err) {
            if (err.status === 404 && err.config && !err.config.__isRetryRequest) {
                print('ACCESS TOKEN EXPIRED!');
                return this.getRefreshToken()
                .then(function (response) {
                    print('TOKEN RECEIVED', response);
                    err.config.__isRetryRequest = true;
                    err.config.headers.Authorization = 'Bearer ' + response.data;
                    err.config.url = 'exists.txt'; // JUST FOR TEST
                    return axios(err.config);
                })
                .catch(function () {
                    print('Refresh login error: ', error);
                    throw error;
                });
            }
            throw err;
        });
        
    }

    render() {
        return <>
            <h1>AXIOS interceptors</h1>
            <div className="explanation">
                <li>
                To emulate access token expiration i use 404 error requesting file 'notexists'
                </li>
                <li>
                To emulate token requrest i use file 'gettoken'
                </li>
                <li>
                To emulate successful authorization i replacing err.config.url with 'exists.txt'
                </li>
            </div>
            <div className="output"></div>
        </>
    }
}



/**
 To emulate access token expiration i use 404 error requesting file 'notexists'
    
    "ACCESS TOKEN EXPIRED!"
    
    "TRYING TO GET TOKEN..."
    
    "TOKEN RECEIVED", {
        "data": "some-token",
        "status": 200,
        "statusText": "",
        "headers": {
            "date": "Mon, 03 Jun 2019 06:31:38 GMT",
            "content-encoding": "br",
            "server": "cloudflare",
            "etag": "W/\"45974c049b94a808ede67034c3ad2dec-static-gzip\"",
            "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
            "vary": "accept-encoding",
            "content-type": "text/plain; charset=utf-8",
            "status": "200",
            "cache-control": "no-cache",
            "cf-ray": "4e0fa0123f37b793-CDG",
		"x-xss-protection": "0"
	},
	"config": {
		"transformRequest": {},
		"transformResponse": {},
		"headers": {
			"Accept": "application/json, text/plain,"
		},
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"method": "get",
		"url": "gettoken"
	}
    },
    "RESPONSE", {
        "data": "some-content",
        "status": 200,
        "statusText": "",
        "headers": {
            "date": "Mon, 03 Jun 2019 06:31:39 GMT",
            "content-encoding": "br",
            "server": "cloudflare",
            "etag": "W/\"ad60407c083b4ecc372614b8fcd9f305-static-gzip\"",
            "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
            "vary": "accept-encoding",
            "content-type": "text/plain; charset=utf-8",
            "status": "200",
            "cache-control": "no-cache",
            "cf-ray": "4e0fa013d91eb793-CDG",
            "x-xss-protection": "0"
        },
        "config": {
            "transformRequest": {},
            "transformResponse": {},
            "headers": {
                "Accept": "application/json, text/plain",
                "Authorization": "Bearer some-token"
            },
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "method": "get",
            "url": "exists.txt",
            "__isRetryRequest": true
        }
    }

 **/