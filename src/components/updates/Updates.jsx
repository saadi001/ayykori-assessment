export default function Updates() {
  const data = [
    { id: 1, name: "Product designer", total: 54 },
    { id: 2, name: "Jr. UI/UX Designer", total: 39 },
    { id: 3, name: "Brand Strategist", total: 60 },
    { id: 4, name: "Jr. Frontend Engineer", total: 50 },
    { id: 5, name: "Product Designer", total: 54 },
    { id: 6, name: "Jr. UI/UX Designer", total: 39 },
    { id: 7, name: "Brand Strategist", total: 60 },
    { id: 8, name: "Jr. Frontend Engineer", total: 50 },
  ];
  return (
    <>
      <div className="p-5 border-l-[3px] border-[#11998e49] h-full">
        <div className="block">
          <p className="text-2xl font-semibold mt-8 text-center">
            Welcome back XTZ
          </p>
          <button className="m-auto block mt-5 px-5 py-2 rounded-md bg-[#11998E] text-white">
            + Create New Job
          </button>
        </div>
        <div className="block  mt-16 ">
          <p className="text-xs font-medium mb-5">Recent Added Jobs</p>

          {data.map((post) => {
            return (
              <div
                key={post.id}
                className="bg-[#B9F2E5] rounded-md flex gap-x-2 p-2 my-3"
              >
                <div className="text-sm p-3 bg-[#11998E] rounded-md text-white">
                  {post?.total}
                </div>
                <div>
                  <h4 className="text-xs font-medium">{post?.name}</h4>
                  <p className="text-[10px] font-light">Total Application</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
