package com.daggerok.domain.core;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * Created by mak on 7/6/16.
 */
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class SnackMachine implements Serializable {

    private int oneCentCount;
    private int tenCentCount;
    private int quarterCount;
    private int oneDollarCount;
    private int fiveDollarCount;
    private int twentyDollarCount;

    private int oneCentCountTransaction;
    private int tenCentCountTransaction;
    private int quarterCountTransaction;
    private int oneDollarCountTransaction;
    private int fiveDollarCountTransaction;
    private int twentyDollarCountTransaction;

    public void buySnack() {

        oneCentCount += oneCentCountTransaction;
        tenCentCount += tenCentCountTransaction;
        quarterCount += quarterCountTransaction;
        oneDollarCount += oneDollarCountTransaction;
        fiveDollarCount += fiveDollarCountTransaction;
        twentyDollarCount += twentyDollarCountTransaction;
    }

    public void returnMoney() {

        oneCentCountTransaction = 0;
        tenCentCountTransaction = 0;
        quarterCountTransaction = 0;
        oneDollarCountTransaction = 0;
        fiveDollarCountTransaction = 0;
        twentyDollarCountTransaction = 0;
    }

    public void insertMoney(int oneCentCount,
                            int tenCentCount,
                            int quarterCount,
                            int oneDollarCount,
                            int fiveDollarCount,
                            int twentyDollarCount) {

        oneCentCountTransaction += oneCentCount;
        tenCentCountTransaction += tenCentCount;
        quarterCountTransaction += quarterCount;
        oneDollarCountTransaction += oneDollarCount;
        fiveDollarCountTransaction += fiveDollarCount;
        twentyDollarCountTransaction += twentyDollarCount;
    }
}
