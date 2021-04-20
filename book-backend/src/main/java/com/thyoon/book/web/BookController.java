package com.thyoon.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.thyoon.book.domain.Book;
import com.thyoon.book.service.BookService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BookController {

	
	private final BookService bookService;
	
	//secutity 적용 - CORS 정책을 가지고 있음.(시큐리티가 CORS를 해제)
	@CrossOrigin
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.CREATED); //201
	}
	
	@CrossOrigin
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(bookService.모두가져오기(), HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findbyid(@PathVariable Long id){
		return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){
		return new ResponseEntity<>(bookService.수정하기(id,book), HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id){
		return new ResponseEntity<>(bookService.삭제하기(id), HttpStatus.OK); //200
	}
}
