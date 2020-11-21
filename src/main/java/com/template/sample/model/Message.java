package com.template.sample.model;

import java.util.Date;
import java.util.Objects;

//@Entity
//@Table(name = "messages")
//@SequenceGenerator( //시퀀스 연결
//        name="SQ_MESSAGES_ID", //시퀀스 제너레이터 이름
//        sequenceName="SQ_MESSAGES_ID", //시퀀스 이름
//        initialValue=1, //시작값 .. 아니 이건 db에 있는 시퀀스 객체가 가지고 있을 정보인데 왜 여기서 설정을 하지??
//        allocationSize=1 //메모리를 통해 할당할 범위 사이즈                                
//        )
public class Message {

//	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY) MYSQL
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, //시퀀스 사용 
//			generator="SQ_MESSAGES_ID" // ??
//			)
//	@Column(name = "id", nullable = false)
	private Integer id;
	
//	@Column(name = "text", nullable = false, length = 128)
	private String text;

//	@Column(name = "created_date", nullable = false)
//	@Temporal(TemporalType.TIMESTAMP)
	private Date createdDate;

	public Message(String text) {
		this.text = text;
		this.createdDate = new Date();
	}

	public Message(int id, String text, Date createdDate) {
		this.id = id;
		this.text = text;
		this.createdDate = createdDate;
	}

	public Integer getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		Message message = (Message) o;
		return Objects.equals(id, message.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
}
