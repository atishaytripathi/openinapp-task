import FileUpload from './components/FileUpload';
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full bg-white">
        <div className="w-full">
          <div className="m-auto  w-[430px] h-[330px] p-4 ">
            
            <FileUpload />
          
            
          </div>
        </div>
      </div>
    </>
  );
}
