import propTypes from 'prop-types';

export const userType = propTypes.shape({
  id: propTypes.string.isRequired,
  full_name: propTypes.string.isRequired,
  profile_picture: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
});

export const captionType = propTypes.shape({
  id: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  created_time: propTypes.string.isRequired,
  from: userType.isRequired,
});

const imageInfo = propTypes.shape({
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
});

export const imageType = propTypes.shape({
  thumbnail: imageInfo.isRequired,
  low_resolution: imageInfo.isRequired,
  standard_resolution: imageInfo.isRequired,
});

const count = propTypes.shape({
  count: propTypes.number.isRequired,
});

export const likesType = count;

export const commentsType = count;
