// app/(admin)/dashboard.tsx
// This screen serves as the main Admin Dashboard, featuring summary cards and
// a segmented control for navigating between Complaint Management, Workers list,
// and Work Records. It combines the designs from image_818945.png, image_8189c6.png, and image_818a03.png.

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../_layout';
import Colors from '../../constants/Colors';
import AdminSummaryCard from '../../components/AdminSummaryCard';
import Card from '../../components/Card';
import CustomButton from '../../components/CustomButton';


type UserRole = 'worker' | 'admin' | null;
type AuthContextType = {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: Exclude<UserRole, null>) => void;
  logout: () => void;
};

export default function AdminDashboardScreen() {
  const router = useRouter();
  const auth = useContext(AuthContext) as AuthContextType | null;
  const logout = auth?.logout || (() => {});

  const [activeTab, setActiveTab] = useState('complaints'); // 'complaints', 'workers', 'work_records'

  const handleLogout = () => {
    logout(); // Clear authentication state
  router.replace('/initial-entry'); // Go back to the initial role selection page
  };

  // Dummy data for admin views
  const adminComplaints = [
    { id: '1', title: 'Wage not received', priority: 'high', worker: 'Ram Kumar', date: '2024-01-08', description: 'Last week\'s wage has not been received yet. Contractor says money hasn\'t come in.', status: 'In Progress' },
    { id: '2', title: 'Overtime work without proper pay', priority: 'medium', worker: 'Sita Devi', date: '2024-01-05', description: 'Worked 12 hours but paid for only 8 hours', status: 'Solved' },
    { id: '3', title: 'Safety equipment not provided', priority: 'high', worker: 'Mohan Prasad', date: '2024-01-07', description: 'Helmet and safety shoes not provided for construction work.', status: 'Pending' },
  ];

  const registeredWorkers = [
    { id: '1', name: 'Ram Kumar', phone: '+91 9876543210', totalWorkDays: 25, totalEarnings: '₹12500', lastWork: '2024-01-10' },
    { id: '2', name: 'Sita Devi', phone: '+91 9876543211', totalWorkDays: 20, totalEarnings: '₹8000', lastWork: '2024-01-09' },
    { id: '3', name: 'Mohan Prasad', phone: '+91 9876543212', totalWorkDays: 30, totalEarnings: '₹15000', lastWork: '2024-01-10' },
  ];

  const allWorkRecords = [
    { id: '1', worker: 'Ram Kumar', date: '2024-01-10', workplace: 'Construction Site A', hours: '8 hours', wage: '₹500', description: 'Brick work' },
    { id: '2', worker: 'Sita Devi', date: '2024-01-09', workplace: 'Office Cleaning', hours: '6 hours', wage: '₹300', description: 'Office cleaning work' },
    { id: '3', worker: 'Mohan Prasad', date: '2024-01-10', workplace: 'Farm Labor', hours: '10 hours', wage: '₹450', description: 'Harvesting crops' },
    { id: '4', worker: 'Ram Kumar', date: '2024-01-09', workplace: 'Painting Job B', hours: '7 hours', wage: '₹400', description: 'Wall painting' },
  ];

  // Remove ComplaintItem usage if not used in renderContent
  const renderContent = () => {
    switch (activeTab) {
      case 'complaints':
        return (
          <View>
            <View style={styles.complaintControls}>
              <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color={Colors.mediumText} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search worker or complaint..."
                />
              </View>
              <TouchableOpacity style={styles.statusFilter}>
                <Text style={styles.statusFilterText}>All Status</Text>
                <Ionicons name="chevron-down-outline" size={16} color={Colors.mediumText} />
              </TouchableOpacity>
            </View>
            {adminComplaints.map((complaint) => (
              <Card key={complaint.id} style={styles.adminComplaintCard}>
                <View style={styles.adminComplaintHeader}>
                  <Text style={styles.adminComplaintTitle}>{complaint.title}</Text>
                  <Text
                    style={[
                      styles.priorityTag,
                      complaint.priority === 'high'
                        ? styles.highPriority
                        : complaint.priority === 'medium'
                        ? styles.mediumPriority
                        : undefined,
                    ]}
                  >
                    {complaint.priority}
                  </Text>
                  <Text
                    style={[
                      styles.statusTag,
                      complaint.status === 'In Progress'
                        ? styles.InProgressStatus
                        : complaint.status === 'Solved'
                        ? styles.SolvedStatus
                        : complaint.status === 'Pending'
                        ? styles.PendingStatus
                        : undefined,
                    ]}
                  >
                    {complaint.status}
                  </Text>
                </View>
                <Text style={styles.adminComplaintMeta}>Worker: {complaint.worker}</Text>
                <Text style={styles.adminComplaintMeta}>Date: {complaint.date}</Text>
                <Text style={styles.adminComplaintDescription}>{complaint.description}</Text>
                <View style={styles.actionButtons}>
                  <CustomButton title="Mark Solved" onPress={() => {}} buttonStyle={styles.actionButton} textStyle={styles.actionButtonText} />
                  <CustomButton title="Mark Pending" onPress={() => {}} buttonStyle={[styles.actionButton, styles.markPendingButton]} textStyle={styles.actionButtonText} />
                </View>
              </Card>
            ))}
          </View>
        );
      case 'workers':
        return (
          <View>
            <Text style={styles.sectionInfo}>Information about all workers and their work history</Text>
            {registeredWorkers.map((worker) => (
              <Card key={worker.id} style={styles.workerCard}>
                <View style={styles.workerInfoRow}>
                  <View style={styles.workerNamePhone}>
                    <Text style={styles.workerName}>{worker.name}</Text>
                    <Text style={styles.workerPhone}>{worker.phone}</Text>
                  </View>
                  <View style={styles.workerStats}>
                    <Text style={styles.workerStatValue}>{worker.totalWorkDays}</Text>
                    <Text style={styles.workerStatLabel}>Total Work Days</Text>
                  </View>
                  <View style={styles.workerStats}>
                    <Text style={styles.workerStatValue}>{worker.totalEarnings}</Text>
                    <Text style={styles.workerStatLabel}>Total Earnings</Text>
                  </View>
                  <View style={styles.workerStats}>
                    <Text style={styles.workerStatValue}>{worker.lastWork}</Text>
                    <Text style={styles.workerStatLabel}>Last Work</Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        );
      case 'work_records':
        return (
          <View>
            <Text style={styles.sectionInfo}>Detailed records of all worker activities</Text>
            {allWorkRecords.map((record) => (
              <Card key={record.id} style={styles.adminWorkRecordCard}>
                <View style={styles.adminWorkRecordRow}>
                  <View style={styles.adminWorkRecordColumn}>
                    <Text style={styles.adminWorkRecordLabel}>Worker</Text>
                    <Text style={styles.adminWorkRecordValue}>{record.worker}</Text>
                  </View>
                  <View style={styles.adminWorkRecordColumn}>
                    <Text style={styles.adminWorkRecordLabel}>Date</Text>
                    <Text style={styles.adminWorkRecordValue}>
                      <Ionicons name="calendar-outline" size={14} color={Colors.mediumText} /> {record.date}
                    </Text>
                  </View>
                  <View style={styles.adminWorkRecordColumn}>
                    <Text style={styles.adminWorkRecordLabel}>Workplace</Text>
                    <Text style={styles.adminWorkRecordValue}>
                      <Ionicons name="location-outline" size={14} color={Colors.mediumText} /> {record.workplace}
                    </Text>
                  </View>
                  <View style={styles.adminWorkRecordColumn}>
                    <Text style={styles.adminWorkRecordLabel}>Hours</Text>
                    <Text style={styles.adminWorkRecordValue}>{record.hours}</Text>
                    <Text style={styles.adminWorkRecordSubValue}>{record.wage}</Text>
                  </View>
                  <View style={styles.adminWorkRecordColumn}>
                    <Text style={styles.adminWorkRecordLabel}>Description</Text>
                    <Text style={styles.adminWorkRecordValue}>{record.description}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.homeButton}>
          <Ionicons name="log-out-outline" size={20} color={Colors.primary} />
          <Text style={styles.homeButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Summary Cards */}
        <View style={styles.summaryCardsContainer}>
          <AdminSummaryCard
            icon={<MaterialCommunityIcons name="account-group-outline" size={30} color={Colors.primary} />}
            value="3"
            label="Total Workers"
            backgroundColor={Colors.white}
          />
          <AdminSummaryCard
            icon={<Ionicons name="hourglass-outline" size={30} color={Colors.warning} />}
            value="1"
            label="Pending"
            backgroundColor={Colors.white}
          />
          <AdminSummaryCard
            icon={<Ionicons name="checkmark-circle-outline" size={30} color={Colors.success} />}
            value="1"
            label="Solved"
            backgroundColor={Colors.white}
          />
          <AdminSummaryCard
            icon={<Ionicons name="document-text-outline" size={30} color={Colors.info} />}
            value="2"
            label="Work Records"
            backgroundColor={Colors.white}
          />
        </View>

        {/* Tab Navigation for Admin Dashboard */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'complaints' && styles.activeTabButton]}
            onPress={() => setActiveTab('complaints')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'complaints' && styles.activeTabButtonText]}>Complaints</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'workers' && styles.activeTabButton]}
            onPress={() => setActiveTab('workers')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'workers' && styles.activeTabButtonText]}>Workers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'work_records' && styles.activeTabButton]}
            onPress={() => setActiveTab('work_records')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'work_records' && styles.activeTabButtonText]}>Work Records</Text>
          </TouchableOpacity>
        </View>

        {/* Render content based on active tab */}
        {renderContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  homeButtonText: {
    marginLeft: 5,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 100, // Give some padding at the bottom for scroll
  },
  summaryCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: Colors.primary,
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.mediumText,
  },
  activeTabButtonText: {
    color: Colors.primary,
  },
  // Styles for Complaints Tab
  complaintControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 5,
  },
  statusFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statusFilterText: {
    marginRight: 5,
    color: Colors.darkText,
  },
  adminComplaintCard: {
    marginBottom: 15,
  },
  adminComplaintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  adminComplaintTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginRight: 10,
  },
  priorityTag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  highPriority: {
    backgroundColor: Colors.errorLight,
    color: Colors.error,
  },
  mediumPriority: {
    backgroundColor: Colors.warningLight,
    color: Colors.warning,
  },
  statusTag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  InProgressStatus: {
    backgroundColor: Colors.warningLight,
    color: Colors.warning,
  },
  SolvedStatus: {
    backgroundColor: Colors.successLight,
    color: Colors.success,
  },
  PendingStatus: {
    backgroundColor: Colors.infoLight,
    color: Colors.info,
  },
  adminComplaintMeta: {
    fontSize: 14,
    color: Colors.mediumText,
    marginBottom: 4,
  },
  adminComplaintDescription: {
    fontSize: 14,
    color: Colors.darkText,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  markPendingButton: {
    backgroundColor: Colors.secondary,
  },
  actionButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Styles for Workers Tab
  sectionInfo: {
    fontSize: 14,
    color: Colors.mediumText,
    marginBottom: 15,
    textAlign: 'center',
  },
  workerCard: {
    marginBottom: 15,
  },
  workerInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workerNamePhone: {
    flex: 2,
    marginRight: 10,
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  workerPhone: {
    fontSize: 12,
    color: Colors.mediumText,
  },
  workerStats: {
    flex: 1,
    alignItems: 'center',
  },
  workerStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  workerStatLabel: {
    fontSize: 11,
    color: Colors.mediumText,
    textAlign: 'center',
  },
  // Styles for Work Records Tab
  adminWorkRecordCard: {
    marginBottom: 15,
  },
  adminWorkRecordRow: {
    flexDirection: 'column', // Changed to column for better multi-line display
  },
  adminWorkRecordColumn: {
    marginBottom: 8, // Spacing between columns
  },
  adminWorkRecordLabel: {
    fontSize: 12,
    color: Colors.mediumText,
    marginBottom: 2,
  },
  adminWorkRecordValue: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.darkText,
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminWorkRecordSubValue: {
    fontSize: 13,
    color: Colors.mediumText,
    marginTop: 2,
  },
});
