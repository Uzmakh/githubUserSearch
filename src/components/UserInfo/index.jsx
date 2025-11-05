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
      <div className="mt-4 py-8 px-8 sm:px-16 sm:text-center leading-8 rounded-md shadow-xl user-info">
        <h3 className="pb-4 font-bold text-xl text-center">
          No results found!
        </h3>

        <p className="text-left md:text-center">
          {" "}
          We couldn't find any Github users matching your search. Please
          double-check the username and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded shadow-lg mb-12 ">
      <div className="user-info h-auto pt-8 px-4 flex flex-col">
        <div className="flex items-center gap-6 md:flex md:flex-row">
          <div className="md:flex-1">
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-24 h-24 rounded-full md:w-full md:h-auto md:rounded-full"
            />
          </div>

          <div className="md:flex-6">
            <div className="flex justify-around flex-col md:grid md:grid-cols-2 md:gap-6">
              <div>
                {user.name && <h2>{user.name}</h2>}

                <a href={user.html_url} target="_blank" rel="no referrer">
                  @{user.login}
                </a>
              </div>
              <div>
                <p>Joined:{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 leading-8">
          {user.bio ? <p>{user.bio}</p> : <p>This profile has no bio</p>}
        </div>

        <div className="flex flex-col items-start mx-2 px-6 py-4 rounded-lg  shadow-sm  leading-10 space-x-4 sm:flex-row sm:justify-around  stats">
          <p>
            Repos
            <br />
            <strong>{user.public_repos}</strong>
          </p>
          <p>
            Followers
            <br />
            <strong>{user.followers}</strong>
          </p>
          <p>
            Following
            <br />
            <strong> {user.following}</strong>
          </p>
        </div>

        <div className="more-info my-6 mx-2 flex flex-col leading-10 space-y-2 sm:flex-row sm:flex-wrap sm:justify-between sm:px-4 sm:items-center md:flex md:flex-row md:justify-between md:items-center  lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div>
            <div className="flex items-center">
              <img
                src={LocationIcon}
                alt=""
                className="inline-block mr-4 bottom-icon"
              />
              {user.location ? <p>{user.location} </p> : <p> Not available</p>}
            </div>
            <div className="flex items-center">
              <img
                src={WebsiteIcon}
                alt=""
                className="inline-block mr-4 bottom-icon"
              />
              {user.blog ? <p>{user.blog} </p> : <p> Not available</p>}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src={TwitterIcon}
                alt=""
                className="inline-block mr-4 bottom-icon"
              />
              {user.twitter_username ? (
                <p>{user.twitter_username} </p>
              ) : (
                <p> Not available</p>
              )}
            </div>
            <div className="flex items-center">
              <img
                src={CompanyIcon}
                alt=""
                className="inline-block mr-4 bottom-icon"
              />
              @{user.login ? <p>{user.login} </p> : <p> Not available</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
