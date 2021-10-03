<template>
	<div class="about">
		<v-header />
		<div class="content-box">
			<v-tags></v-tags>
			<div class="content">
				<router-view v-slot="{ Component }">
					<transition name="move" mode="out-in">
						<keep-alive :include="tagsList">
							<component :is="Component" />
						</keep-alive>
					</transition>
				</router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import vHeader from "../components/Header";
	import vTags from "../components/Tags.vue";
	export default {
		components: {
			vHeader,
			vTags,
		},
		computed: {
			tagsList() {
				return this.$store.state.tagsList.map((item) => item.name);
			},
		},
	};
</script>
