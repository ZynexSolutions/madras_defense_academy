import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
  },
  notificationButton: {
    padding: 10,
    borderRadius: 100,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: "black",
  },
  filterButton: {
    backgroundColor: "#146EF2",
    borderRadius: 100,
    padding: 10,
    marginLeft: 10,
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: "#146EF2",
    borderRadius: 16,
    padding: 20,
  },
  bannerTitle: {
    fontSize: 14,
    color: "white",
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  bannerSubText: {
    fontSize: 12,
    color: "white",
    marginTop: 5,
  },
  bannerDots: {
    flexDirection: "row",
    marginTop: 10,
  },
  bannerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#9bbff4",
    marginRight: 5,
  },
  activeDot: {
    backgroundColor: "white",
  },
  popularCourses: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  popularCoursesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  popularCoursesTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#146EF2",
    fontSize: 14,
  },
  categoryButton: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: "#146EF2",
  },
  categoryText: {
    fontSize: 14,
    color: "gray",
  },
  activeCategoryText: {
    color: "white",
  },
  courseCard: {
    backgroundColor: "white",
    borderRadius: 16,
    marginRight: 10,
    width: 200,
  },
  courseImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  courseDetails: {
    padding: 10,
    position: "relative",
  },
  courseCategory: {
    fontSize: 12,
    color: "gray",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  coursePrice: {
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  starIcon: {
    marginRight: 2,
  },
  courseRating: {
    fontSize: 14,
    fontWeight: "bold",
  },
  courseStudents: {
    fontSize: 14,
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainCategories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainCategoryCard: {
    backgroundColor: "#146EF2",
    borderRadius: 16,
    padding: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mainCategoryIcon: {
    backgroundColor: "#2E87FF",
    padding: 10,
    borderRadius: 100,
    marginBottom: 10,
  },
  mainCategoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  topMentors: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  topMentorsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  topMentorsTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mentorCard: {
    marginRight: 10,
    alignItems: "center",
  },
  mentorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  mentorName: {
    fontSize: 14,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    color: "gray",
  },
});

export default styles;
