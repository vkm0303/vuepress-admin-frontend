<!--
 * @Description: 
 * @Author: AmsChen
 * @Date: 2021-04-04 20:06:39
 * @LastEditors: AmsChen
 * @LastEditTime: 2021-04-05 19:22:20
 * @FilePath: \hexo后台管理系统\Frontend\src\views\markdown.vue
-->
<template>
	<div>
		<div>
			<el-input
				placeholder="请输入标题"
				v-model="title"
				clearable
				show-word-limit
			>
				<template #prepend>标题</template>
			</el-input>
		</div>
		<v-md-editor
			v-model="content"
			autofocus
			left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save"
			:disabled-menus="[]"
			line-number
			height="600px"
			@copy-code-success="handleCopyCodeSuccess"
			@upload-image="handleUploadImage"
			@save="save"
		/>
	</div>
</template>
<script>
	import { ElMessage } from "element-plus";
	import { getContent, saveArticle, uploadImage } from "../api/article/article";
	export default {
		data: function () {
			return {
				title: "",
				articleName: "",
				content: "",
				saveFlag: 0,
			};
		},
		watch: {
			"$route.query": function (newQuery) {
				if (JSON.stringify(newQuery) !== "{}") {
					this.title = this.$route.query.articleName;
					this.articleName = this.$route.query.articleName;
					this.getContent();
				}
			},
		},
		async beforeMount() {
			this.title = this.$route.query.articleName;
			this.articleName = this.$route.query.articleName;
			this.getContent();
		},
		methods: {
			handleCopyCodeSuccess() {
				ElMessage.success({
					message: "已复制",
					type: "success",
					duration: 800,
				});
			},

			async handleUploadImage(event, insertImage, files) {
				// 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
				let form = new FormData();
				form.set("uploadImage", files[0]);
				const res = await uploadImage(this.articleName, form);

				insertImage({
					url: res.data.imageUrl,
					desc: "image",
					width: "auto",
					height: "auto",
				});
			},

			async getContent() {
				if (this.articleName) {
					let res = await getContent(this.articleName);
					this.content = res.data.content;
				}
			},

			async save() {
				if (this.content.length) {
					if (!this.articleName) {
						this.articleName = this.title;
					}
					const res = await saveArticle(this.articleName, {
						title: this.title,
						content: this.content,
					});
					console.log(res);
					if (res.ret) {
						ElMessage.success({
							message: "保存成功",
							type: "success",
							duration: 1500,
						});
					} else {
						ElMessage.error({
							message: "保存失败",
							duration: 1500,
						});
					}
				} else {
					ElMessage.warning({
						message: "内容不能为空",
						type: "warning",
						duration: 800,
					});
				}
			},
		},
	};
</script>
<style lang="scss">
	.markdown-container {
		.editor-btn {
			margin-top: 20px;
		}
		.title {
			padding-bottom: 30px;
			text-align: center;
			font-size: 20px;
			letter-spacing: 1px;
			color: #333;
			font-weight: 600;
		}
	}
</style>
