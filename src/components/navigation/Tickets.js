function Ticket({ days, price }) {
  return (
    <tr>
      <td class="border border-zinc-500 py-2 px-3">{days}</td>
      <td class="border border-zinc-500 py-2 px-3">{price}</td>
    </tr>
  );
}

function Tickets() {
  return (
    <>
      <h2 class="mt-20">Tickets</h2>
      <table class="mt-5 table w-full border-collapse border border-zinc-500">
        <thead class="text-lg font-bold">
          <td class="border border-zinc-500 p-3">Tickets</td>
          <td class="border border-zinc-500 p-3">Price</td>
        </thead>
        <tbody>
          <Ticket days={"Single day ticket"} price={"£30"} />
          <Ticket days={"7 day ticket"} price={"£100"} />
        </tbody>
        <caption class="caption-bottom">
          Once they're gone, they're gone!
        </caption>
      </table>
    </>
  );
}

export default Tickets;
