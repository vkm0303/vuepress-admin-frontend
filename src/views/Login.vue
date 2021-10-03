<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">vuepress博客管理</div>
			<el-form
				:model="params"
				:rules="rules"
				ref="login"
				label-width="0px"
				class="ms-content"
			>
				<el-form-item prop="username">
					<el-input v-model="params.username" placeholder="请输入账号">
						<template #prepend>
							<el-button icon="el-icon-user"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						type="password"
						placeholder="请输入密码"
						v-model="params.password"
						@keyup.enter="submitForm()"
					>
						<template #prepend>
							<el-button icon="el-icon-lock"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button type="primary" @click="submitForm()">登录</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	import { login } from "../api/user/user";
	export default {
		data() {
			return {
				params: {
					username: "",
					password: "",
				},
				rules: {
					username: [
						{ required: true, message: "请输入用户名", trigger: "blur" },
					],
					password: [{ required: true, message: "请输入密码", trigger: "blur" }],
				},
			};
		},
		created() {
			this.$store.commit("clearTags");
		},
		methods: {
			async submitForm() {
				const res = await login(this.params);
				if (res.ret) {
					this.$message.success("登录成功");
					localStorage.setItem("username", res.data.username);
					this.$router.push("/");
				} else {
					this.$message.error("请输入正确的账号和密码");
					return false;
				}
			},
		},
	};
</script>

<style scoped>
	.login-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/bg.jpeg);
		background-size: 100%;
	}
	.ms-title {
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		color: #fff;
		border-bottom: 1px solid #ddd;
	}
	.ms-login {
		position: absolute;
		top: 50%;
		width: 400px;
		margin-top: -190px;
		margin-left: 50%;
		transform: translateX(-50%);
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.2);
		overflow: hidden;
	}
	.ms-content {
		padding: 30px 30px;
	}
	.login-btn {
		text-align: center;
	}
	.login-btn button {
		width: 100%;
		height: 36px;
		margin-bottom: 10px;
	}
	.login-tips {
		font-size: 12px;
		line-height: 30px;
		color: #fff;
	}
</style>