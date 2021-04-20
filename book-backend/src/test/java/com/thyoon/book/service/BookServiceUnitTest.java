package com.thyoon.book.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.thyoon.book.domain.BookRepository;
/**
 * 단위테스트 (service와 관련된 애들만 메모리(ioc)에 띄우면 됌)
 * BoardRepository => 가짜 객체로 만들 수 있음.
 *
 */

@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {

	@InjectMocks //BookService 객체가 만들어질 때 해당 파일에 @Mock로 등록된 모든 애들을 주입받는다.
	private BookService bookService;
	
	@Mock
	private BookRepository bookRepository;
	
	
}
