<template>
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<!-- <transition name="slide" mode="out-in"> -->
					<router-view></router-view>
				<!-- </transition> -->
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header'

export default {
	components: { Header },
	created() {
		this.$store.dispatch('initStocks')
	}
}
</script>



