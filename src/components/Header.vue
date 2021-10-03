<template>
	<div class="header">
		<div class="logo">vuepress博客管理</div>
		<div class="header-right">
			<div class="header-user-con">
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{ username }}
						<i class="el-icon-caret-bottom"></i>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a
								href="https://github.com/vkm0303/vuepress-admin-frontend.git"
								target="_blank"
							>
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item divided command="loginout"
								>退出登录</el-dropdown-item
							>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				fullscreen: false,
				name: "linxin",
				message: 2,
			};
		},
		computed: {
			username() {
				let username = localStorage.getItem("username");
				return username ? username : this.name;
			},
		},
		methods: {
			// 用户名下拉菜单选择事件
			handleCommand(command) {
				if (command == "loginout") {
					localStorage.removeItem("username");
					this.$router.push("/login");
				}
			},
		},
	};
</script>
<style scoped>
	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		font-size: 22px;
		color: #fff;
	}
	.header .logo {
		width: 250px;
		margin-left: 20px;
		line-height: 70px;
	}
	.header-right {
		padding-right: 20px;
	}
	.header-user-con {
		display: flex;
		height: 70px;
		align-items: center;
	}
	.btn-fullscreen {
		transform: rotate(45deg);
		margin-right: 5px;
		font-size: 24px;
	}
	.btn-bell,
	.btn-fullscreen {
		position: relative;
		width: 30px;
		height: 30px;
		text-align: center;
		border-radius: 15px;
		cursor: pointer;
	}
	.btn-bell-badge {
		position: absolute;
		right: 0;
		top: -2px;
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background: #f56c6c;
		color: #fff;
	}
	.btn-bell .el-icon-bell {
		color: #fff;
	}
	.user-name {
		margin-left: 10px;
	}
	.el-dropdown-link {
		color: #fff;
		cursor: pointer;
	}
	.el-dropdown-menu__item {
		text-align: center;
	}
</style>
