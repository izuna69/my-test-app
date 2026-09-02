# PostgreSQL 데이터베이스 연동 가이드

본 문서는 Spring Boot 백엔드와 PostgreSQL 데이터베이스를 연동하는 전체 절차 및 설정을 단계별로 정리한 문서입니다.

---

## 1. 사전 준비 (Prerequisites)
- PostgreSQL 데이터베이스 설치 및 실행
- 기본 포트: `5432`
- 연동할 데이터베이스(Database) 생성 (예: `demo_db`)
- 계정 정보 확인 (기본 사용자: `postgres`, 비밀번호)

---

## 2. 의존성 설정 (build.gradle)
PostgreSQL JDBC 드라이버 라이브러리를 추가합니다.

```groovy
dependencies {
    // PostgreSQL 드라이버
    runtimeOnly 'org.postgresql:postgresql'
}
```

---

## 3. 애플리케이션 환경 설정 (application.properties)
기존 H2 임시 설정을 비활성화하고 PostgreSQL 연결 정보로 설정합니다.

```properties
spring.application.name=demo

# PostgreSQL Datasource 설정
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=1985

# JPA / Hibernate 설정
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

---

## 4. 연동 확인 및 테스트
1. PostgreSQL 서버 실행 상태 확인
2. Spring Boot 애플리케이션 재시작
3. 콘솔 로그에서 Hibernate 테이블 생성 쿼리 확인
4. 회원가입 및 로그인 데이터 저장 테스트
