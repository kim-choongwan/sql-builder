

-- ����Ȯ�� (����� ����)
-- ����

-- ���̺� ����
CREATE TABLE MESSAGES (
  ID INT NOT NULL ,
  TEXT VARCHAR(128) NOT NULL ,
  CREATED_DATE  DATE  DEFAULT SYSDATE,
  PRIMARY KEY (ID)
) ;


-- ���̺� ���� Ȯ��
SELECT * FROM USER_TABLES;

-- ������ ����
CREATE SEQUENCE SQ_MESSAGES_ID;
