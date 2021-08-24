/*
 * jQuery JavaScript LazyLoad Library v1.0.0
 * https://github.com/juwonlee-dev/lazyload-js
 *
 * Copyright (c) 2021 JuwonLee
 * Single licensed under the GPL 2.0 licenses.
 * https://github.com/juwonlee-dev/lazyload-js/blob/main/LICENSE
 *
 * Date: Tue Aug 24 2021 20:30:00 GMT+0900 (한국 표준시)
 */

/**
  * @FileName  	: lazyload-lib.js
  * @Project   	: lazyload-js
  * @Date 	   	: 2021. 8. 24. 
  * @작성자 	   	: 이주원
  * @변경이력 	   	: 
  * @프로그램 설명 	: JQuery.getScript 메소드의 동기, 비동기 다중 처리용 확장 메소드 추가
  */
(function($) {
	"use strict"; // ECMAScript5의 엄격 모드 기능 활성화

	/*
	 * JQuery 객체에 getScripts 메소드가 이미 코드 인젝션이 완료된 경우
	 * 아래 코드를 실행하지 않고 중지함
	 */
	if ($.getScripts) { return; }

	/*
	 * JQuery 객체에 getScripts 메소드 코드 인젝션
	 */
	/**
	  * @Method Name  	: getScripts
	  * @작성일 		  	: 2021. 8. 24.
	  * @작성자 		  	: 이주원
	  * @변경이력 		  	: 
	  * @Method 설명     	: JQuery.getScript 메소드의 동기, 비동기 다중 처리
	  * @param 			: options
	  * @return			: function
	  */
	$.getScripts = function(options) {
		var _options; 		// 메소드 사용 옵션
		var _sync; 			// 동기 메소드 객체
		var _async_done;	// 비동기 메소드 객체(success)
		var _async_fail;	// 비동기 메소드 객체(error)
		var _response; 		// ajax 응답 반환값 저장 배열(실제 리턴값)

		/*
		 * 옵션 기본값 설정
		 * $.extend(arr1, arr2)는 arr1에 arr2를 합쳐주는데 중복되면 arr2로 덮어쓰기함
		 */
		_options = $.extend({
			'async' : false,
			'cache' : true
		}, options);

		/*
		 * urls 옵션에 Object 배열이 아닌 String이 들어왔을 때
		 * String을 문자 배열이 아닌 요소 1개짜리 배열로 만들어야 함
		 */
		if (typeof _options.urls === 'string') {
			_options.urls = [ _options.urls ];
		}

		/*
		 * ajax 응답 반환값 저장 배열(실제 리턴값) 초기화
		 * done : 성공값 배열
		 * fail : 실패값 배열
		 */
		_response = {
			done: [],
			fail: []
		};
		
		/**
		  * @Method Name  	: _sync
		  * @작성일 		  	: 2021. 8. 24.
		  * @작성자 		  	: 이주원
		  * @변경이력 		  	: 
		  * @Method 설명     	: 동기 처리
		  * @param 			: 
		  * @return			: function
		  */
		_sync = function() {
			$.ajax({
				url : _options.urls.shift(),
				dataType : 'script',
				cache : _options.cache,
				success : function() {
					var _args = arguments; 		// _args는 Object
					_args[3] = this.url;		// 입력했던 url을 반환값에 넣어줌
					_response.done.push(_args);
					
					if (_options.urls.length > 0) {
						_sync();
					} else if (typeof options.success === 'function') {
						options.success(_response);
					}
				},
				error : function() {
					var _args = arguments;
					_args[3] = this.url;
					_response.fail.push(_args);
					if (_options.urls.length > 0) {
						_sync();
					} else if (typeof options.error === 'function') {
						options.error(_response);
					}
				}
			});
		};
		
		/**
		  * @Method Name  	: _async_done
		  * @작성일 		  	: 2021. 8. 24.
		  * @작성자 		  	: 이주원
		  * @변경이력 		  	: 
		  * @Method 설명     	: 비동기 처리(success)
		  * @param 			: 
		  * @return			: function
		  */
		_async_done = function() {
			var _args = arguments;
			_args[3] = this.url;
			_response.done.push(_args);
			if (_response.done.length === _options.urls.length && typeof options.success === 'function') {
				options.success(_response);
			}
		};
		
		/**
		  * @Method Name  	: _async_fail
		  * @작성일 		  	: 2021. 8. 24.
		  * @작성자 		  	: 이주원
		  * @변경이력 		  	: 
		  * @Method 설명     	: 비동기 처리(error)
		  * @param 			: 
		  * @return			: function
		  */
		_async_fail = function() {
			var _args = arguments;
			_args[3] = this.url;
			_response.fail.push(_args);
			if (_response.fail.length === _options.urls.length && typeof options.error === 'function') {
				options.error(_response);
			}
		};

		if (_options.async === true) { // 비동기 처리일 때
			for (var i = 0; i < _options.urls.length; i++) {
				$.ajax({
					url : _options.urls[i],
					dataType : 'script',
					cache : _options.cache,
					success : _async_done,
					error : _async_fail
				});
			}
		} else { // 동기 처리일 때
			_sync();
		}
	};
}(jQuery));
