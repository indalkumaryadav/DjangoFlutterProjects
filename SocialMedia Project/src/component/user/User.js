import React, { useState } from "react";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import {} from "./style";
import PopUp from "../common/PopUp";
import { useSelector } from "react-redux";
import PostCard from "../post/PostCard";
import UserCard from "./UserCard";

const User = ({ post, follower, following, email, image }) => {
  const [postOpen, setPostOpen] = useState(false);
  const [followersOpen, setFollowsOpen] = useState(false);
  const [followingOpen, setFollowingOpen] = useState(false);
  const allUser = useSelector((state) => state.user.user);

  const currentUserPost = useSelector(
    (state) => state.post.post.current_user_post
  );

  return (
    <>
      <Container
        style={{
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <Avatar
              src={image}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </IconButton>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
            }}
          >
            {email}
          </Typography>
          <Typography variant="subtitle2">Delhi, India</Typography>
        </div>

        {/*  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setPostOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
              }}
            >
              {post}
            </Typography>
            <Typography variant="subtitle2">Posts</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setFollowsOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
              }}
            >
              {follower}
            </Typography>
            <Typography variant="subtitle2">Followers</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setFollowingOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
              }}
            >
              {following}
            </Typography>
            <Typography component="p" variant="subtitle2">
              Following
            </Typography>
          </div>
        </div>
      </Container>
      <Divider />
      {/* post list */}
      <PopUp title="Your Post" open={postOpen} setOpen={setPostOpen}>
        <div
          style={{
            width: 700,
          }}
        >
          <Grid container spacing={1}>
            {currentUserPost?.map((item, i) => {
              return (
                <Grid key={i} item md={4}>
                  <PostCard title={item?.title} image={item?.image} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </PopUp>
      {/* Followers list */}
      <PopUp title="Followers" open={followersOpen} setOpen={setFollowsOpen}>
        <div
          style={{
            width: 400,
          }}
        >
          <Container>
            {allUser?.map((user, i) => {
              return (
                <UserCard
                  key={i}
                  image={user.profile.user_image}
                  email={user.email}
                  username={user.username}
                />
              );
            })}
          </Container>
        </div>
      </PopUp>
      {/* Following */}
      <PopUp title="Following" open={followingOpen} setOpen={setFollowingOpen}>
        <div
          style={{
            width: 400,
          }}
        >
          <Container>
            {allUser?.map((user, i) => {
              return (
                <UserCard
                  key={i}
                  image={user.profile.user_image}
                  email={user.email}
                  username={user.username}
                />
              );
            })}
          </Container>
        </div>
      </PopUp>
    </>
  );
};

export default User;