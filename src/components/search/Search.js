import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const SearchInput = ({ handleSearch }) => {
  const [name, setName] = useState('');

  const handleSearchPress = async () => {
    await handleSearch(name);
  };

  const handleTyping = ({ target }) => setName(target.value);

  return (
    <Input.Search
      onChange={handleTyping}
      onSearch={handleSearchPress}
      placeholder="Search for movies..."
      style={{ width: '100%' }}
    />
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchInput;
