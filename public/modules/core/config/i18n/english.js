'use strict';

angular.module('core').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('en', {
		MENU: '目录',
		SIGNUP_TAB: '注册',
		SIGNIN_TAB: '登录',
		SIGNOUT_TAB: '注销',
		EDIT_PROFILE: '编辑个人档案',
		MY_SETTINGS: '我的设置',
		CHANGE_PASSWORD: '更改密码',
		TOGGLE_NAVIGATION: '调整导航栏'
	});

	$translateProvider.preferredLanguage('en')
		.fallbackLanguage('en')
		.useSanitizeValueStrategy('escape');

}]);
