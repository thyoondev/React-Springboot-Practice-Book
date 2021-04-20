package com.thyoon.book.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.aspectj.lang.annotation.After;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thyoon.book.domain.Book;
import com.thyoon.book.domain.BookRepository;
import com.thyoon.book.service.BookService;

import lombok.extern.slf4j.Slf4j;



/***
 * 통합테스트(모든 bean들을 똑같이 ioc에 올리고 테스트 하는 것)
 * WebEnvironment.MOCK = 실제톰캣이 아닌 다른 톰캣으로 테스트
 * WebEnvironment.RANDOM_PORT = 실제톰캣으로 테스트
 * @AutoConfigureMockMvc = MockMvc를 ioc에 등록해줌
 * @Transactional 은 각각의 함수를 rollback 해주는 어노테이션
 * 
 *
 */

@Slf4j
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK) 
public class BookControllerIntegreTest {
	
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private EntityManager entityManager;

	
	@BeforeEach
	public void init() {
		entityManager.createNativeQuery("ALTER TABLE book ALTER COLUMN id RESTART WITH 1").executeUpdate();
	}
	
	
	// BDDMockito 패턴 given, when, then
		@Test
		public void save_테스트() throws Exception {
			// given (테스트를 하기 위한 준비)
			Book book = new Book(null, "스프링 따라하기", "코스");
			String content = new ObjectMapper().writeValueAsString(book);

			// when (테스트 실행)
			ResultActions resultAction = mockMvc.perform(post("/book").contentType(MediaType.APPLICATION_JSON_UTF8)
					.content(content).accept(MediaType.APPLICATION_JSON_UTF8));

			// then (검증)
			resultAction.andExpect(status().isCreated()).andExpect(jsonPath("$.title").value("스프링 따라하기"))
					.andDo(MockMvcResultHandlers.print());
		}

		@Test
		public void findAll_테스트() throws Exception {
			// given
			List<Book> books = new ArrayList<>();
			books.add(new Book(null, "스프링부트 따라하기", "코스"));
			books.add(new Book(null, "리엑트 따라하기", "코스"));
			books.add(new Book(null, "JUnit 따라하기", "코스"));
			bookRepository.saveAll(books);

			// when
			ResultActions resultAction = mockMvc.perform(get("/book").accept(MediaType.APPLICATION_JSON_UTF8));

			// then
			resultAction.andExpect(status().isOk()).andExpect(jsonPath("$.[0].id").value(1L))
					.andExpect(jsonPath("$", Matchers.hasSize(3))).andExpect(jsonPath("$.[2].title").value("JUnit 따라하기"))
					.andDo(MockMvcResultHandlers.print());
		}
		
		@Test
		public void findById_테스트() throws Exception {
			//given
			
			List<Book> books = new ArrayList<>();
			books.add(new Book(null, "스프링부트 따라하기", "코스"));
			books.add(new Book(null, "리엑트 따라하기", "코스"));
			books.add(new Book(null, "JUnit 따라하기", "코스"));
			bookRepository.saveAll(books);
			
			
			Long id = 2L;
			
			//when
			ResultActions resultAction = mockMvc.perform(get("/book/{id}",id)
					.accept(MediaType.APPLICATION_JSON_UTF8));
			
			//then
			resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.title").value("리엑트 따라하기"))
			.andDo(MockMvcResultHandlers.print());
		}
		
		@Test
		public void update_테스트() throws Exception {
			//given
			Long id = 3L;
			
			List<Book> books = new ArrayList<>();
			books.add(new Book(null, "스프링부트 따라하기", "코스"));
			books.add(new Book(null, "리엑트 따라하기", "코스"));
			books.add(new Book(null, "JUnit 따라하기", "코스"));
			bookRepository.saveAll(books);
			
			
			Book book = new Book(null,"C++ 따라하기","태희"); 
			String content = new ObjectMapper().writeValueAsString(book);
			
			
			//when
			ResultActions resultAction =  mockMvc.perform(put("/book/{id}",id)
					.contentType(MediaType.APPLICATION_JSON_UTF8)
					.content(content)
					.accept(MediaType.APPLICATION_JSON_UTF8));
			
			
			//then
			resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.title").value("C++ 따라하기"))
			.andDo(MockMvcResultHandlers.print());
		}
}
