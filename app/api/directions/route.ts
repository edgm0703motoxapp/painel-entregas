// app/api/directions/route.ts

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "OK",
      routes: [
        {
          legs: [
            {
              duration: { text: "15 mins", value: 900 },
              distance: { text: "5 km", value: 5000 },
              end_address: "Rua de Exemplo, 123",
              start_address: "Av. Inicial, 456"
            }
          ]
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
