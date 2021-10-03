<template>
	<div>
		<div>
			<el-row :gutter="20" class="mgb20">
				<el-col :span="8">
					<el-card shadow="hover" :body-style="{ padding: '0px' }">
						<div class="grid-content grid-con-2">
							<i class="el-icon-lx-comment grid-con-icon"></i>
							<div class="grid-cont-right">
								<div class="grid-num">{{ articles.length }}</div>
								<div>文章数量</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="8">
					<el-card shadow="hover" :body-style="{ padding: '0px' }">
						<div class="grid-content grid-con-2">
							<i class="el-icon-lx-comment grid-con-icon"></i>
							<div class="grid-cont-right">
								<div class="grid-num">···</div>
								<div>文章评论</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="8">
					<el-card shadow="hover" :body-style="{ padding: '0px' }">
						<div class="grid-content grid-con-2">
							<i class="el-icon-lx-comment grid-con-icon"></i>
							<router-link class="grid-cont-right" :to="{ path: '/markdown' }">
								<div style="color: #2d8cf0; font-size: 24px; font-weight: 700">
									写博客
								</div>
							</router-link>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<div>
			<el-card
				shadow="hover"
				style="min-height: 250px"
				:body-style="{ 'padding-top': '0' }"
			>
				<template #header>
					<div class="list-title">
						<span>文章列表</span>
					</div>
				</template>
				<div
					style="
						overflow-y: scroll;
						width: 100%;
						max-height: 420px;
						padding: 5px 0;
					"
				>
					<router-link
						v-for="article in articles"
						:key="article"
						:to="{
							path: '/markdown',
							query: { articleName: article },
						}"
					>
						<div class="article-name">{{ article }}</div>
					</router-link>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
	import { getArticleList } from "../api/article/article";
	export default {
		name: "dashboard",
		data() {
			return {
				name: localStorage.getItem("username"),
				articles: [],
			};
		},
		watch: {
			"$route.path": async function (newPath) {
				if (newPath === "/dashboard") {
					this.getPostList();
				}
			},
		},
		beforeMount() {
			this.getPostList();
		},
		computed: {},

		methods: {
			async getPostList() {
				let res = await getArticleList();
				let { articles } = res.data;
				this.articles = articles;
			},
		},
	};
</script>

<style scoped>
	.el-row {
		margin-bottom: 20px;
	}

	.grid-content {
		display: flex;
		align-items: center;
		height: 100px;
	}

	.grid-cont-right {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #999;
	}

	.grid-num {
		font-size: 30px;
		font-weight: bold;
	}

	.grid-con-icon {
		font-size: 50px;
		width: 100px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		color: #fff;
	}

	.grid-con-1 .grid-con-icon {
		background: rgb(45, 140, 240);
	}

	.grid-con-1 .grid-num {
		color: rgb(45, 140, 240);
	}

	.grid-con-2 .grid-con-icon {
		background: rgb(100, 213, 114);
	}

	.grid-con-2 .grid-num {
		color: rgb(45, 140, 240);
	}

	.mgb20 {
		margin-bottom: 20px;
	}

	.article-name {
		margin-top: 10px;
		font-size: 16px;
		color: #313131;
	}

	.article-name:hover {
		cursor: pointer;
		color: #409eff;
	}
</style>
