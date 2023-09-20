export function Slide() {
  return (
    <div className="h-screen max-h-screen relative animate-fade animate-once animate-duration-1000 animate-delay-300 flex items-center">
      <div className="grid grid-cols-2 relative w-[95%] m-auto">
        <div className="bg-red-700 fixed h-[130vh] w-1/2 -left-28 -top-32 -z-50 rotate-[8deg] hover:w-7/12 transition-all"></div>
        <div className="">
          <h2 className="font-bold text-[14rem] col-span-1 text-white">1970</h2>
        </div>
        <p className="text-xl text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          veritatis rerum? Pariatur error distinctio repudiandae dicta quidem
          maxime dolorem, ullam eos sint explicabo exercitationem! Deserunt
          delectus est non perspiciatis ratione omnis, fugit accusamus corrupti
          eveniet tempore consequuntur! Natus incidunt placeat doloremque,
          magnam perferendis voluptas dignissimos quaerat aut saepe eligendi!
          Dolorem distinctio soluta illo laborum explicabo aliquam adipisci id
          rem amet maxime. Dolor porro perspiciatis deleniti sequi excepturi
          doloremque eligendi, nostrum velit vero, earum ratione vel!
          Repudiandae error, quasi, ad laboriosam veniam illo amet commodi quae
          nihil, ipsam accusantium culpa neque quo necessitatibus porro labore?
          Labore minus illo inventore consectetur expedita?
        </p>
      </div>
    </div>
  );
}
