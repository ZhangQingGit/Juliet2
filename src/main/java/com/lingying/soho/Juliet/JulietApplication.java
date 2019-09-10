package com.lingying.soho.Juliet;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@MapperScan("com.lingying.soho.Juliet.mapper")
@Configuration
public class JulietApplication {

	public static void main(String[] args) {
		SpringApplication.run(JulietApplication.class, args);
	}

}
