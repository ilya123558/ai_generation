import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { ShadowWrapper } from "../wrappers/shadow-wrapper/ShadowWrapper";

interface IProps {
  title: string;
  photoList: string[];
}

export const ProfileItem = ({photoList, title}: IProps) => {
  return (
    <li>
      <ShadowWrapper borderRadius={22} className="p-[3.74vw_4.82vw_3.47vw_3.47vw]">
        <div className="flex flex-col gap-[2.67vw]">
          <div className="flex justify-between items-center">
            <h5 className="fs-15 font-medium urbanist">{title}</h5>
            <button onClick={() => {}}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M14.1866 4.76669L7.8266 11.1267C7.19327 11.76 5.31325 12.0533 4.89325 11.6333C4.47325 11.2133 4.75991 9.33332 5.39325 8.69999L11.7599 2.33334C11.9169 2.16204 12.107 2.02435 12.3187 1.92855C12.5304 1.83275 12.7593 1.78082 12.9917 1.77592C13.2239 1.77104 13.4549 1.81326 13.6704 1.90007C13.8859 1.98688 14.0817 2.11648 14.2457 2.28101C14.4098 2.44554 14.5389 2.64161 14.6251 2.85738C14.7113 3.07316 14.7529 3.30416 14.7474 3.53646C14.7419 3.76876 14.6893 3.99756 14.5929 4.20899C14.4965 4.42042 14.3583 4.61015 14.1866 4.76669Z" stroke="#23262F" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.33301 3.16669H3.99967C3.29243 3.16669 2.61419 3.44763 2.11409 3.94773C1.614 4.44783 1.33301 5.12611 1.33301 5.83335V12.5C1.33301 13.2073 1.614 13.8856 2.11409 14.3856C2.61419 14.8858 3.29243 15.1667 3.99967 15.1667H11.333C12.8063 15.1667 13.333 13.9667 13.333 12.5V9.16669" stroke="#23262F" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            {photoList.map((photo, index) => (
              <div 
                style={{
                  transform: index === 0 ? '': `translateX(calc(${-index} * 60%)) rotate(3deg)`,
                  zIndex: photoList.length - index
                }}
                className={`rounded-[16px] relative overflow-hidden aspect-square w-[19.51vw] h-[19.51vw]`}
              >
                <ImageWithSkeleton
                  src={photo}
                  alt="profile-image"
                  height={73}
                  width={73}
                />
              </div>
            ))}
          </div>
        </div>
      </ShadowWrapper>
    </li>
  );
};