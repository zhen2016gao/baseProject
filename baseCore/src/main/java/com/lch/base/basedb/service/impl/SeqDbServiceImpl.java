package com.lch.base.basedb.service.impl;

import org.springframework.transaction.annotation.Transactional;

import com.lch.base.basedb.data.TSeqMapper;
import com.lch.base.basedb.model.TSeq;
import com.lch.base.basedb.service.SeqDbService;


public class SeqDbServiceImpl implements SeqDbService {
	private TSeqMapper seqMapper;

	public void setSeqMapper(TSeqMapper seqMapper) {
		this.seqMapper = seqMapper;
	}
	
	private int getSequence(String id){
        return getSequence(id, 1);
    }
	private int getSequence(String id, int count){
        if(count < 1){
            throw new RuntimeException("count should greater than 0");
        }
        int size = seqMapper.tickCountSeq(id, count);
        if(size == 0){
            TSeq tSeq = new TSeq();
            tSeq.setSeq(count - 1);
            tSeq.setId(id);
            seqMapper.insertSelective(tSeq);
            return 0;
        }else{
            TSeq seq = seqMapper.selectByPrimaryKey(id);
            return seq.getSeq() - count + 1;
        }
    }


	@Override
	public int getUserId() {
		return getSequence("USERID");
	}


	@Override
	public int getTOperatingRecordId() {
		return getSequence("TLOGID");
	}

	@Override
	@Transactional
	public int getUserRegistId() {
		return getSequence("UserRegist");
	}
}
