export async function GET() {
  return Response.json({
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
  });
}
