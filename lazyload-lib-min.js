/*
 * jQuery JavaScript LazyLoad Library v1.0.0
 * https://github.com/juwonlee-dev/lazyload-js
 *
 * Copyright (c) 2021 JuwonLee
 * Single licensed under the GPL 2.0 licenses.
 * https://github.com/juwonlee-dev/lazyload-js/License
 *
 * Date: Tue Aug 24 2021 20:30:00 GMT+0900 (한국 표준시)
 */
(function(a){"use strict";a.getScripts||(a.getScripts=function(b){var c,d,e,f,g;if(c=a.extend({async:!1,cache:!0},b),"string"==typeof c.urls&&(c.urls=[c.urls]),g={done:[],fail:[]},d=function(){a.ajax({url:c.urls.shift(),dataType:"script",cache:c.cache,success:function(){var a=arguments;a[3]=this.url,g.done.push(a),0<c.urls.length?d():"function"==typeof b.success&&b.success(g)},error:function(){var a=arguments;a[3]=this.url,g.fail.push(a),0<c.urls.length?d():"function"==typeof b.error&&b.error(g)}})},e=function(){var a=arguments;a[3]=this.url,g.done.push(a),g.done.length===c.urls.length&&"function"==typeof b.success&&b.success(g)},f=function(){var a=arguments;a[3]=this.url,g.fail.push(a),g.fail.length===c.urls.length&&"function"==typeof b.error&&b.error(g)},!0===c.async)for(var h=0;h<c.urls.length;h++)a.ajax({url:c.urls[h],dataType:"script",cache:c.cache,success:e,error:f});else d()})})(jQuery);
