const Characters = () => {
    const alphabets: string = "abcdefghijklmnopqrstuvwxyz";

    return (
        <div className="flex-grow bg-blue-200 text-blue-900">
            <div className="text-center py-3 px-6 pb-6">
                <p className="text-sm font-semibold">Pilih salah satu alfabet untuk mulai mempelajarinya.</p>
            </div>
            <div className="grid grid-cols-4 gap-1.5 px-3 pt-3 pb-3">
                {alphabets.split('').map((alphabet) => (
                    <div className="flex justify-center items-center bg-white text-4xl font-extrabold w-full h-full rounded-lg shadow-sm" style={{ aspectRatio: "1/1" }}>
                        {alphabet.toUpperCase()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;