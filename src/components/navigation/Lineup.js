function Band({ name, time_n_stage }) {
  return (
    <>
      <div class="font-bold">{name}</div>
      <div class="text-zinc-400">{time_n_stage}</div>
    </>
  );
}

function Performances({ day }) {
  return (
    <>
      <div>
        <h4 class="my-4 rounded-lg bg-zinc-900 p-2">{day}</h4>
      </div>
      <div></div>
      <div class="text-right">
        <Band name={"Jackie Chaston"} time_n_stage={"6pm - Sage Stage"} />
      </div>
      <div></div>
      <div></div>
      <div>
        <Band name={"Jackie Chaston"} time_n_stage={"6pm - Sage Stage"} />
      </div>
    </>
  );
}

function Lineup() {
  return (
    <>
      <h2 class="mt-20">Lineup</h2>
      <p>
        Follow the timetable and stage to ensure you don't miss your favourite
        artists
      </p>
      <div class="relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200">
        <div class="absolute top-0 left-1/2 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div class="sticky top-1/2">
            <div class="relative h-4 w-4">
              <div class="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div class="relative h-4 w-4 rounded-full bg-rose-500"></div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <Performances day={"1st July"} />
          <Performances day={"1st July"} />
        </div>
      </div>
    </>
  );
}

export default Lineup;
