import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface DetailPageProps {}

const DetailPage: React.FC<DetailPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      <h1>Detail Page</h1>
      {id ? (
        <p>
          선택한 항목의 ID: <strong>{id}</strong>
        </p>
      ) : (
        <p>ID가 없습니다.</p>
      )}
      <button onClick={handleBack} style={styles.button}>
        뒤로가기
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center" as const,
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DetailPage;
