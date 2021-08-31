import React, {useRef, useImperativeHandle, forwardRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../../constant/font';
import color from '../../constant/color';

searchInput = (props, ref) => {
  const searchRef = useRef();

  const [search, setSearch] = useState('');
  const [iconSearch, setIconSearch] = useState('ios-search');

  const onChangeTextHandler = value => {
    setSearch(value);
    setIconSearch('ios-search');
  };

  const searchClickHandler = () => {
    if (iconSearch === 'close-outline') {
      setIconSearch('ios-search');
      setSearch('');

      props.searchProject('');
    } else {
      if (search.trim().length > 0) {
        setIconSearch('close-outline');

        props.searchProject(search);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return search;
    },
    getSearchClickedStatus: () => {
      return iconSearch;
    },
  }));

  return (
    <View style={{...styles.searchSection, ...props.containerStyle}} >
      <TouchableOpacity
        onPress={() => searchClickHandler()}
        style={styles.searchIcon}>
        <Ionicons name={iconSearch} size={24} color="#000" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="جستجو ..."
        ref={searchRef}
        value={search}
        onChangeText={onChangeTextHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: '94%',
    alignSelf: 'center',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.gray1,
  },
  searchIcon: {
    padding: 12,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    textAlign: 'right',
    borderRadius: 10,
    paddingBottom: 10,
    fontFamily: Fonts.Shabnam,
    paddingLeft: 0,
    backgroundColor: color.White,
    color: color.textColorGray,
  },
});

export default forwardRef(searchInput);
