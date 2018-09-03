package com.sample.webapp;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@Slf4j
@Controller
public class Application implements ErrorController {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  /**
   * forward all 404s to the index.html page so Angular Routing can handle the URL
   * @return
   */
  @RequestMapping("/error")
  public String index() {
    return "forward:/";
  }

  @Override
  public String getErrorPath() {
    return "forward:/";
  }

  @Bean
  /**
   * FIXME Remove this if you don't need CORS across all APIs
   */
  public FilterRegistrationBean corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.addAllowedOrigin("chrome-extension://akdbimilobjkfhgamdhneckaifceicen");
    config.addAllowedOrigin("http://localhost");
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    source.registerCorsConfiguration("/api/**", config);
    FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
    bean.setOrder(0);
    return bean;
  }

}
