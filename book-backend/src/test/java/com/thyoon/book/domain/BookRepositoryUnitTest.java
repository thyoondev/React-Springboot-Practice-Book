package com.thyoon.book.domain;

import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

//단위테스트 (db관련된 bean들이 ioc에 등록되면됌)

@Transactional
@AutoConfigureTestDatabase(replace = Replace.ANY) //가짜 디비로 테스트 // none = 실제 db로 테스트
@DataJpaTest //repository들을 다 ioc에 등록해줌
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
}
