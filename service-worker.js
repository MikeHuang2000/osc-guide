if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const o=e=>i(e,c),b={module:{uri:c},exports:r,require:o};s[c]=Promise.all(d.map((e=>b[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-BfKyiUXf.js",revision:"a793019d0bc8cf8c2926a55f696ba1fd"},{url:"assets/app-Dnc8Fct3.js",revision:"d4289dfff0fc53a76a53a574607c817b"},{url:"assets/baz.html-D-8E-mSx.js",revision:"c158d2229728866828f0206916c15321"},{url:"assets/clangd.html-Bs0yAAKS.js",revision:"a7e4b95c930ad814a8f083c453e69293"},{url:"assets/code-share.html-UxHy6AE8.js",revision:"77f390caddd59ede6bb519f084402c24"},{url:"assets/disable.html-ys1zLhgv.js",revision:"b7e55e3023cb065bbb1d7090e99b6d35"},{url:"assets/encrypt.html-DMKYNsKo.js",revision:"d323d5ebd48d9f5777dfb257187ac244"},{url:"assets/environment_variable.html-DvqXbVgH.js",revision:"e016fc608f4dd6ece5bbd9ff089da440"},{url:"assets/github.html-rlbA9h8I.js",revision:"41e821f0acdde9a0ed99770366a231bf"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-B65GvSfE.js",revision:"3ddaadfe19bf2eee8611161b6e563b85"},{url:"assets/index.html-BJxWtkG5.js",revision:"d24d9f87024714d04865f8c876ca95ff"},{url:"assets/index.html-CflboHRL.js",revision:"a2479780bf2ee24c87be9d73b1cc9b7e"},{url:"assets/index.html-Ctl7QuzB.js",revision:"674cf160394d651c126589e4abdc15f7"},{url:"assets/index.html-D8GN1ze_.js",revision:"e2cf9b8d5da3431502f963677a1033d1"},{url:"assets/index.html-DcRmGUwu.js",revision:"8c7fd40640f84a59525513877c771857"},{url:"assets/index.html-DeEXxS6q.js",revision:"e2bf4d661d8f7fd9b2176a25d0f8ebcb"},{url:"assets/index.html-DohAcPWh.js",revision:"211978ad2c3d5f6c6cb554d8b063b38b"},{url:"assets/index.html-O27mLDxX.js",revision:"5299e7f0c6705575ea1cf37c8fd537bd"},{url:"assets/install_vscode_on_windows.html-C9BeL1t8.js",revision:"ce094901978cdd2ac50dc72c2cce7770"},{url:"assets/layout.html-CvfKj6xQ.js",revision:"79a85d023a6a27d71e7c21ca8716bda3"},{url:"assets/markdown.html-CeLzH2M2.js",revision:"ed1774a9824cf2dc510c437af22928f4"},{url:"assets/matlab.html-DiW7Vxmi.js",revision:"3ebe52207e6139acc2ac791b67eb14e9"},{url:"assets/mingw.html-CnIMLdAf.js",revision:"378a22f79968d346f71814ba95778816"},{url:"assets/ms-office.html-BZPXWCTN.js",revision:"9cb21fb758400997829c613532f9fcc6"},{url:"assets/page.html-B2Wo4kA2.js",revision:"6ad861b895d0b51de325d74d5b31cb02"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/powertoy.html-lh4rMpc6.js",revision:"8b83ddf6f02a969900dd92d507523da1"},{url:"assets/ray.html-DBGfZxHx.js",revision:"ef7c309bb89075911bfc1acd1733a404"},{url:"assets/style-BZA8TLm7.css",revision:"33550c53b62d422fb657c03bfff8cecc"},{url:"assets/using_vscode.html-DMRQvoPj.js",revision:"d40cc1033a17e64f2acf1305e2235d02"},{url:"assets/vscode_cpp_common.html-DHbh7RqG.js",revision:"0c7772598bdda6b55867a04fd58df212"},{url:"assets/windows_cpp.html-BDBLuQs6.js",revision:"81b1da3bca479859aede9faaef3d7aaf"},{url:"assets/xmake.html-C6MqK9ga.js",revision:"28bb317d5e3dfc684ebcda274c0fc5fd"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"e8766f391da865ebdeb7f337e18d738d"},{url:"demo/bar/baz.html",revision:"bb7aff67ca9d18c3b9c887178f0a819c"},{url:"demo/bar/index.html",revision:"ea72c5727ab86782db843d1b5af1da2c"},{url:"demo/disable.html",revision:"5b71abe73326a8db0c3e39dfd1a6ed01"},{url:"demo/encrypt.html",revision:"018b770d89404909a1cf51f73c4b56c5"},{url:"demo/foo/index.html",revision:"158aa26cb53ccf1d9633bf4ee8567d7a"},{url:"demo/foo/ray.html",revision:"faa990c247d7256358d292657f088424"},{url:"demo/index.html",revision:"05ef03e6bd4779e3c8c0199c9fd82416"},{url:"demo/layout.html",revision:"4ff407454a9352c44e4c0cbbefca743a"},{url:"demo/markdown.html",revision:"c50193dd24cdd3587d56263aaef55fcb"},{url:"demo/page.html",revision:"1da2d16b56e04949b18c389cfaf8ab14"},{url:"guide/environment/clangd.html",revision:"689d73d8ae74b45fb66a5c2204b1921b"},{url:"guide/environment/environment_variable.html",revision:"ab3f8f12a914633f6afaa48be65def1d"},{url:"guide/environment/index.html",revision:"b35ca88b575e3a7340a406d577345d8a"},{url:"guide/environment/mingw.html",revision:"4a13776d01047eb7f2c64cc39cce30e6"},{url:"guide/environment/xmake.html",revision:"f1c3804df0f51fcee9af2fcbccdd010d"},{url:"guide/index.html",revision:"82031a7466a0ee5fafec4375555b2202"},{url:"guide/student/github.html",revision:"6e5d78df347832d53534b3ee79fd47af"},{url:"guide/student/index.html",revision:"67ba394fe52da2cc0bad5f56158383d1"},{url:"guide/student/matlab.html",revision:"b502884debb160ab2e4adafc27515fb7"},{url:"guide/student/ms-office.html",revision:"026412c68e14bbee9c2b9b974a23a18d"},{url:"guide/tools/code-share.html",revision:"07bffbae0241f440ac77753c39654642"},{url:"guide/tools/index.html",revision:"3b173ef72552ffd48accd27c735a838c"},{url:"guide/tools/powertoy.html",revision:"0f0004e22e55e4972f46239f503b0130"},{url:"guide/tools/vscode/index.html",revision:"b8bdcb7e8163c0de4a7c7da5e6b1677d"},{url:"guide/tools/vscode/install_vscode_on_windows.html",revision:"25eeeec24a2428f095da8ab75db010bd"},{url:"guide/tools/vscode/using_vscode.html",revision:"cae8a8d58232889237cc2446da90fc8b"},{url:"guide/tools/vscode/vscode_cpp_common.html",revision:"cdfef72027bffe41f2f00d79583279b8"},{url:"guide/windows_cpp.html",revision:"90f9ed00773c9bd78636366950103732"},{url:"index.html",revision:"e3684267e9371162b7103473cde0c938"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/wrong_fmt-BGAIisWi.png",revision:"d12137a7bbbebdbb5de65982c09f345e"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"},{url:"osc_home.png",revision:"03820831a282298cbac1c4cd36c8f166"},{url:"osc_logo.png",revision:"0395aea42a3ab44d328f59edccf805fe"}],{}),e.cleanupOutdatedCaches()}));
