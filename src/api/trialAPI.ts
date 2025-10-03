// Вынесли вашу функцию handleStartTrial в отдельный файл
export const handleStartTrial = async () => {
    try {
      // Отправляем POST запрос к вашему FastAPI
      const response = await fetch('http://localhost:8000/start-trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: 'user@example.com'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Перенаправляем на дашборд вместо alert
        window.location.href = '/dashboard';
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      alert('Connection failed');
    }
  };