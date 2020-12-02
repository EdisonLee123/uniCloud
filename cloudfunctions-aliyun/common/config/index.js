const path = require('path')
module.exports = {
	// 微信小程序端对应的微信支付及登录配置配置
	wxConfigMp: {
		appId: 'wx151aadd475852fd6',
		secret: '369cbbb7ee3c0af84ec5f8d40b9a8b50',
		mchId: '1514141031',
		key: 'asf983rhfsjkyhFSt5hDS45a23kj12h3',
	},
	// App端对应的微信支付配置
	wxConfigApp: {
		appId: 'wx151aadd475852fd6',
		mchId: '1514141031',
		key: 'asf983rhfsjkyhFSt5hDS45a23kj12h3',
	},
	// 微信PC网站支付
	wxConfigH5: {
		appId: 'wx5d1a2220005b9c0e',
		mchId: '1514141031',
		key: 'asf983rhfsjkyhFSt5hDS45a23kj12h3',
	},
	// 支付宝小程序端对应的支付宝支付及登录配置
	aliConfigMp: {
		mchId: "",
		appId: "",
		alipayPublicKey: "",
		privateKey: "",
	},
	// App端对应的支付宝支付配置
	aliConfigApp: {
		mchId: "",
		appId: "",
		alipayPublicKey: "",
		privateKey: "",
	}
}
