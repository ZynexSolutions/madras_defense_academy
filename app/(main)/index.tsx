import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "@/styles/homeStyles";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useState } from "react";

import { Image } from "expo-image";

const categories = ["All", "Category 1", "Category 2", "Category 3"];
const courses = [
  {
    category: "Category",
    title: "Course Title",
    price: "Rs 2999",
    rating: 4.2,
    students: 7830,
  },
  {
    category: "Category",
    title: "Course Title",
    price: "Rs 2999",
    rating: 4.2,
    students: 7830,
  },
];
const mainCategories = ["AirForce", "Navy", "Army"];
const topMentors = ["Sonja", "Jensen", "Victoria", "Castaldo", "Smith"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Hi, Your Name</Text>
            <Text style={styles.subTitle}>
              What Would you like to learn Today?
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color={"#009E7A"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons
              name="search"
              size={24}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for.."
              placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>25% OFF*</Text>
            <Text style={styles.bannerText}>Today's Special</Text>
            <Text style={styles.bannerSubText}>
              Get a Discount for Every Course Order only Valid for Today.!
            </Text>
            <View style={styles.bannerDots}>
              <View style={styles.bannerDot} />
              <View style={styles.bannerDot} />
              <View style={[styles.bannerDot, styles.activeDot]} />
              <View style={styles.bannerDot} />
              <View style={styles.bannerDot} />
            </View>
          </View>
        </View>
        <View style={styles.popularCourses}>
          <View style={styles.popularCoursesHeader}>
            <Text style={styles.popularCoursesTitle}>Popular Courses</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAll}>View All</Text>
              <Feather name="chevron-right" size={16} color="#146EF2" />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.activeCategory,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.activeCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            {courses.map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Image
                  source={require("../../assets/images/home/course.png")}
                  style={styles.courseImage}
                />
                <View style={styles.courseDetails}>
                  <Text style={styles.courseCategory}>{course.category}</Text>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseStats}>
                    <Text style={styles.coursePrice}>{course.price}</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons
                        name="star"
                        size={14}
                        color="#FFD700"
                        style={styles.starIcon}
                      />
                      <Text style={styles.courseRating}>{course.rating}</Text>
                    </View>
                    <Text style={styles.courseStudents}>
                      {course.students} Std
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.bookmarkButton}>
                    <Ionicons name="bookmark-outline" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesHeader}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAll}>View All</Text>
              <Feather name="chevron-right" size={16} color="#146EF2" />
            </TouchableOpacity>
          </View>
          <View style={styles.mainCategories}>
            {mainCategories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.mainCategoryCard}>
                <View style={styles.mainCategoryIcon}>
                  <Ionicons name="book-outline" size={24} color="white" />
                </View>
                <Text style={styles.mainCategoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.topMentors}>
          <View style={styles.topMentorsHeader}>
            <Text style={styles.topMentorsTitle}>Top Mentor</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAll}>View All</Text>
              <Feather name="chevron-right" size={16} color="#146EF2" />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, paddingLeft: 10 }}
          >
            {topMentors.map((mentor, index) => (
              <View key={index} style={styles.mentorCard}>
                <Image
                  source={require("../../assets/images/home/author.png")}
                  style={styles.mentorImage}
                />
                <Text style={styles.mentorName}>{mentor}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="home" size={24} color="#146EF2" />
          <Text style={[styles.tabText, { color: "#146EF2" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="book-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="play-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Feeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="list-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="person-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
