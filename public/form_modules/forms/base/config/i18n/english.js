'use strict';

angular.module('view-form').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {
    FORM_SUCCESS: '表单条目已成功提交',
	REVIEW: '检查',
    BACK_TO_FORM: '回到表单',
	EDIT_FORM: '编辑这个表单',
	CREATE_FORM: '创建这个表单',
	ADVANCEMENT: '{{total}} 个浏览者中，有 {{done}} 个人回答了',
	CONTINUE_FORM: '继续填写表单',
	REQUIRED: '必填',
	COMPLETING_NEEDED: '{{answers_not_completed}} 个答案需要完善',
	OPTIONAL: '可选',
	ERROR_EMAIL_INVALID: '请输入一个合理的电子邮件地址',
	ERROR_NOT_A_NUMBER: '请输入数字',
	ERROR_URL_INVALID: '请输入一个连接',
	OK: '好',
	ENTER: '请按ENTER',
	YES: '是',
	NO: '否',
	NEWLINE: '按SHIFT+ENTER创建新的一行',
	CONTINUE: '继续',
	LEGAL_ACCEPT: '我同意',
	LEGAL_NO_ACCEPT: '我不同意',
	DELETE: '删除',
	CANCEL: '取消',
	SUBMIT: '提交',
	UPLOAD_FILE: '在此上传您的文件',
	Y: 'Y（是）',
	N: 'N（否）',
	OPTION_PLACEHOLDER: '输入或选择一个选项',
	ADD_NEW_LINE_INSTR: '按SHIFT+ENTER添加新的一行,
	ERROR: '错误',

	LOADING_LABEL: '载入中',
	WAIT_LABEL: '请稍后',

	FORM_404_HEADER: '404 - 表单不存在',
	FORM_404_BODY: '非常抱歉，你正试图访问的表单不存在',

  	FORM_UNAUTHORIZED_HEADER: '你没有访问此表单的权限',
  	FORM_UNAUTHORIZED_BODY1: '你正试图访问的表单目前是私有的，没有开放公开访问的权限',
  	FORM_UNAUTHORIZED_BODY2: '如果你是此表单的所有人，你可以在表单管理面板的“配置”面板中将它设定为“公开"',
  });

  $translateProvider.preferredLanguage('en')
  	.fallbackLanguage('en')
	.useSanitizeValueStrategy('escape');

}]);
