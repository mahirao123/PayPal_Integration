package com.example.demo.addController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AddController {
@PostMapping("/add")
public int addDigigte(@RequestBody AddRequest request ) {
	System.out.println("First_app2 is run successful");
		System.out.println("Incoming values are!!"+request);
		int sum =request.getNum1()+request.getNum2();
		System.out.println("Sum"+sum);
		return sum;
	}

}
