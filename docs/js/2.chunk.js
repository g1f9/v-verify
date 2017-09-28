webpackJsonp([2],{323:function(n,t){n.exports={template:'<div class="markdown-body"><h3 id="-">介绍</h3>\n<p><strong>v-verify</strong> 提供了少量的公共验证器、tips提示框组件和两个内置方法。</p>\n<h3 id="-">公共验证器</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>params</th>\n<th>introduction</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>required</td>\n<td>无</td>\n<td>必填字段</td>\n</tr>\n<tr>\n<td>date</td>\n<td>format（YYYY-MM-DD、YYYY/MM/DD 等）</td>\n<td>指定格式填写日期</td>\n</tr>\n<tr>\n<td>len</td>\n<td>number(字符长度)</td>\n<td>字符长度必须为制定数字</td>\n</tr>\n<tr>\n<td>max</td>\n<td>number(字符长度)</td>\n<td>字符长度必须大于制定数字</td>\n</tr>\n<tr>\n<td>min</td>\n<td>number(字符长度)</td>\n<td>字符长度必须小于制定数字</td>\n</tr>\n<tr>\n<td>numberic</td>\n<td>无</td>\n<td>必须填写数字</td>\n</tr>\n</tbody>\n</table>\n<h3 id="-">内置方法</h3>\n<p>Vue.$validator.verify(validator, value)</p>\n<ul>\n<li>validator: 验证器</li>\n<li>value: 需要验证等值</li>\n</ul>\n<pre><code class="lang-javascript"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n      data () { ... },\n      <span class="hljs-attr">methods</span>: {\n        verify() {\n          <span class="hljs-keyword">this</span>.$validator.verify(<span class="hljs-string">\'date:DD/MM/YYYY\'</span>, <span class="hljs-string">\'2018-09-07\'</span>) <span class="hljs-comment">// return false</span>\n        }\n      }\n    }\n  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<p>Vue.$validator.verifyAll(name)</p>\n<ul>\n<li>name: 需要验证类别名称</li>\n</ul>\n<p>该方法主要为了提交数据到服务器前再次验证所有需要验证到字段</p>\n<vuep template="#demo4"></vuep>\n\n<script v-pre type="text/x-template" id="demo4">\n  <style>\n    .text {\n      color: #4fc08d;\n    }\n  </style>\n\n  <template>\n    <div>\n      <div>\n        <label>日期</label>\n        <p>\n          <input class="example-input"\n                v-verify.input.blur="{\n                  regs: \'required|date:YYYY/MM/DD\',\n                  submit: \'demo4\',\n                  style: \'example-input-error\',\n                  name: \'日期\'\n                }"\n                placeholder="YYYY/MM/DD"/>\n        </p>\n      </div>\n\n      <div>\n        <label>电话</label>\n        <p>\n          <input class="example-input"\n                v-verify.input.blur="{\n                  regs: \'required|numberic|len:11\',\n                  submit: \'demo4\',\n                  name: \'电话\'\n                }"\n                placeholder="电话"/>\n        </p>\n      </div>\n\n      <div>\n        <label>姓名</label>\n        <p>\n          <input class="example-input"\n                v-verify.input.blur="{\n                  regs: \'required\',\n                  submit: \'demo4\',\n                  name: \'姓名\'\n                }"\n                placeholder="姓名"/>\n        </p>\n      </div>\n\n      <div>\n        <button class="example-btn example-btn_default"\n                @click="submitData">\n          提交\n        </button>\n      </div> \n    </div>\n  </template>\n\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2017/09/09\'\n        }\n      },\n      methods: {\n        submitData() {\n          const result = this.$validator.verifyAll(\'demo4\')\n          if (result.indexOf(false) > -1) {\n            alert(\'抱歉！请按指定格式填写\')\n          } else {\n            alert(\'填写成功\')\n          }\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h3 id="tips-">tips提示框</h3>\n<p>tips 为默认的错误信息提示提示框</p>\n<p>好了， 是不是很简单。快去看<a href="/#/basic">基本示例</a>吧</p>\n</div>'}}});
//# sourceMappingURL=2.chunk.js.map