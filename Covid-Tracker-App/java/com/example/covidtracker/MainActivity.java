package com.example.covidtracker;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import org.eazegraph.lib.charts.PieChart;
import org.eazegraph.lib.models.PieModel;

import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        TextView totalConfirmed,totalActive,totalDeaths,totalRecovered,totalTests;
        TextView todayConfirm,todayRecovered,todayDeaths;
        TextView DateTV;
        PieChart piechart;
        List<CountryData> list;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        list= new ArrayList<>();
        totalConfirmed=findViewById(R.id.total_confirmed);
        totalActive=findViewById(R.id.total_active);
        totalDeaths=findViewById(R.id.total_deaths);
        totalRecovered=findViewById(R.id.total_recovered);
        totalTests=findViewById(R.id.total_tests);
        piechart=findViewById(R.id.piechart);
        DateTV=findViewById(R.id.date);

        todayConfirm=findViewById(R.id.today_confirmed);
        todayRecovered=findViewById(R.id.today_recovered);
        todayDeaths=findViewById(R.id.today_deaths);
        ApiUtilities.getAPIInterface().getCountryData().enqueue(new Callback<List<CountryData>>() {
            @Override
            public void onResponse(Call<List<CountryData>> call, Response<List<CountryData>> response) {
                list.addAll(response.body());
                for (int i=0;i<list.size();i++){
                    if(list.get(i).getCountry().equals("India")){
                        int confirm=Integer.parseInt(list.get(i).getCases());
                        int active=Integer.parseInt(list.get(i).getActive());
                        int recovered=Integer.parseInt(list.get(i).getRecovered());
                        int death=Integer.parseInt(list.get(i).getDeaths());
                        int tests=Integer.parseInt(list.get(i).getTests());
                        int todaydeathvar=Integer.parseInt(list.get(i).getTodayDeaths());
                        int todayconfirmvar=Integer.parseInt(list.get(i).getTodayCases());
                        int todayrecovervar=Integer.parseInt(list.get(i).getTodayRecovered());

                        totalActive.setText(NumberFormat.getInstance().format(active));
                        totalConfirmed.setText(NumberFormat.getInstance().format(confirm));
                        totalDeaths.setText(NumberFormat.getInstance().format(death));
                        totalRecovered.setText(NumberFormat.getInstance().format(recovered));
                        totalTests.setText(NumberFormat.getInstance().format(tests));
                        todayConfirm.setText("+"+(NumberFormat.getInstance().format(todayconfirmvar)));
                        todayRecovered.setText("+"+NumberFormat.getInstance().format(todayrecovervar));
                        todayDeaths.setText("+"+NumberFormat.getInstance().format(todaydeathvar));

                        setText(list.get(i).getUpdated(),DateTV);

                        piechart.addPieSlice(new PieModel("Confirm",confirm, Color.parseColor("#6a329f")));
                        piechart.addPieSlice(new PieModel("Active",active,Color.parseColor("#ffd966")));
                        piechart.addPieSlice(new PieModel("Recovered",recovered,Color.parseColor("#00CD2A")));
                        piechart.addPieSlice(new PieModel("Death",death, Color.parseColor("#FF0000")));
                        piechart.startAnimation();
                    }
                }
            }

            @Override
            public void onFailure(Call<List<CountryData>> call, Throwable t) {
                Toast.makeText(MainActivity.this,"Error : "+t.getMessage(),Toast.LENGTH_SHORT).show();
            }
        });

    }

    private void setText(String updated, TextView DateTV) {
        DateFormat dateFormat= new SimpleDateFormat("MMM dd, yyyy");
        long milliseconds=Long.parseLong(updated);
        Calendar calender= Calendar.getInstance();
        calender.setTimeInMillis(milliseconds);
        DateTV.setText("Updated at "+ dateFormat.format(calender.getTime()));
    }

    public void init() {

    }
}