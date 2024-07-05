function StoryCard({ text, img }) {
  return (
    <div className="flex flex-col min-w-[100px] h-[74px] items-center">
      <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-[2px] rounded-full">
        <div class="bg-white p-1 rounded-full">
          <img
            src={img}
            alt="Profile Picture"
            className="w-[72px] h-[72px] rounded-full"
          />
        </div>
      </div>
      <span className="text-[13px] text-[#535575]">
        {text.split(" ").slice(0, 2).join(",")}...
      </span>
    </div>
  );
}

export default StoryCard;
