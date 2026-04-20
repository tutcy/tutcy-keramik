package com.tutcy.keramik.backend.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
class SecurityConfig {

    /*
    @Bean
    fun authTokenFilter(): RoadmapAuthTokenFilter = RoadmapAuthTokenFilter(securityService)

    @Bean
    fun authenticationManager(authConfig: AuthenticationConfiguration): AuthenticationManager = authConfig.authenticationManager
    */

    @Bean
    fun web(http: HttpSecurity): SecurityFilterChain {
        http
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
            .headers { it.contentSecurityPolicy { policyConfig -> policyConfig.policyDirectives("default-src 'self'; connect-src 'self' http://localhost:48888; script-src 'self'; img-src 'self' data:") } }
            .httpBasic { it.disable() }
        return http.build()
    }
}