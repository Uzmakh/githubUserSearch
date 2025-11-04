import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LocationIcon from "../../assets/icon-location.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import CompanyIcon from "../../assets/icon-company.svg";

const UserInfo = () => {
  const { state } = useContext(UserContext);
  const { user } = state;

  console.log("State:", state);
  console.log("User:", user);

  if (!user) {
    return (
      <div className="mt-4 p-4 rounded-md shadow-sm user-info">
        <p className="text-red-500">No User information available!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded shadow-sm mb-12">
      <div className="user-info h-auto pt-8 px-4 flex flex-col">
        <div className="flex items-center gap-6">
          <div className="md:flex-1">
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-24 h-24 rounded-full"
            />
          </div>

          <div className="md:flex-6">
            <div className="flex justify-between flex-col">
              {user.name && <h2>{user.name}</h2>}
              <div>
                <a href={user.html_url} target="_blank" rel="no referrer">
                  @{user.login}
                </a>
              </div>
              <p>Joined:{new Date(user.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div className="my-8 leading-8">
          <p>{user.bio}</p>
        </div>

        <div className="flex  justify-evenly px-6 py-4 rounded-lg w-full shadow-sm text-center leading-10 space-x-4 stats">
          <p className="">
            <strong> Repos</strong>
            <br />
            {user.public_repos}
          </p>
          <p>
            <strong>Followers</strong>
            <br />
            {user.followers}
          </p>
          <p>
            <strong>Following</strong>
            <br />
            {user.following}
          </p>
        </div>

        <div className="more-info my-6 flex flex-col leading-10 space-y-2 ">
          <div className="flex items-center">
            <img src={LocationIcon} alt="" className="inline-block mr-4 bottom-icon"/>
            {user.location}
          </div>
          <div className="flex items-center">
            <img src={WebsiteIcon} alt="" className="inline-block mr-4 bottom-icon"/>
            {user.blog}
          </div>
          <div className="flex items-center">
            <img src={TwitterIcon} alt=""className="inline-block mr-4 bottom-icon" />
            {user.twitter_username}
          </div>
          <div className="flex items-center">
            <img src={CompanyIcon} alt="" className="inline-block mr-4 bottom-icon"/>@{user.login}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
