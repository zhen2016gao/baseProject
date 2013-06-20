package com.lch.base.basedb.data;

import com.lch.base.basedb.model.QrtzJobDetails;
import com.lch.base.basedb.model.QrtzJobDetailsExample;
import com.lch.base.basedb.model.QrtzJobDetailsKey;
import com.lch.base.basedb.tvo.JobTVO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface QrtzJobDetailsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int countByExample(QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int deleteByExample(QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(QrtzJobDetailsKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int insert(QrtzJobDetails record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int insertSelective(QrtzJobDetails record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    List<QrtzJobDetails> selectByExampleWithBLOBs(QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    List<QrtzJobDetails> selectByExample(QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    QrtzJobDetails selectByPrimaryKey(QrtzJobDetailsKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") QrtzJobDetails record, @Param("example") QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByExampleWithBLOBs(@Param("record") QrtzJobDetails record, @Param("example") QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") QrtzJobDetails record, @Param("example") QrtzJobDetailsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(QrtzJobDetails record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByPrimaryKeyWithBLOBs(QrtzJobDetails record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_job_details
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(QrtzJobDetails record);
    
    public List<JobTVO> queryJobDetail(Map<String, Object> map);
    
    public int queryJobDetailCount(Map<String, Object> map);
}