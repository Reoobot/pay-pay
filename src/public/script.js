// async function handleCheckout() {
//     const res = await fetch('/checkout-session', {
//         method: 'POST'
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// }

async function handleCheckout() {
    try {
      const response = await fetch('https://pay-plum.vercel.app/checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: 1000,
            currency: 'usd',
            paymentMethodType: 'card',
            paymentMethod: 'pm_card_visa',
            confirm: true
        })
      });


  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      window.location.href = data.url;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  



function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}







"https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl"